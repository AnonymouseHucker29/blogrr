export async function updateUserProfile(userId: any, updatedData: any) {
  try {
    await fetch("/api/edit-user", {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        userId,
        ...updatedData,
      }),
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return null;
  }
}
