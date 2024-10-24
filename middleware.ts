import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({
  publicRoutes: ['/'],  // Handle dynamic segments with :param syntax
  afterAuth(auth, req) {
    // Ensure that 'auth' is properly initialized
    if (!auth) {
      return NextResponse.error();
    }

    // If the user is authenticated and the route is public, redirect to organization selection or organization page
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      // Redirect to the organization page if the user has an organization
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }

    // Allow the request to continue if no redirect conditions are met
    return NextResponse.next();
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
