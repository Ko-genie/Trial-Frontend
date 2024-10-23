import { auth, currentUser } from "@clerk/nextjs/server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
console.log(ACTION, ENTITY_TYPE);  // Debugging line to verify enum imports
import { db } from "@/lib/db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = await auth(); // Await the auth() function
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error("User or organization ID not found!");
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType,
        entityTitle,
        action,
        userId: user.id, // Use user.id from currentUser()
        userImage: user?.imageUrl || "", // Assign an empty string if imageUrl is null
        userName: `${user?.firstName} ${user?.lastName}`,
      },
    });
  } catch (error) {
    console.log("[AUDIT_LOG_ERROR]", error);
  }
};
