import Transaction from "@/components/forms/Transaction";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import App from "@/components/modals/TransactionCard";

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Criar movimentação financeira</h1>
      <Transaction userId={userInfo._id} />
      <App />
    </>
  );
}

export default Page;
