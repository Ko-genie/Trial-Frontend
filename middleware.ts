import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    // Ensure that 'auth' is properly initialized
    if (!auth) {
      return NextResponse.error(new Error("Authentication object is missing"));
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

    // If the user is not authenticated and the route is not public, redirect to sign-in
    // if (!auth.userId && !auth.isPublicRoute) {
    //   return RedirectToSignIn({ redirectUrl: req.url });
    // }

    // If the user is authenticated but hasn't selected an organization, redirect to organization selection
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
