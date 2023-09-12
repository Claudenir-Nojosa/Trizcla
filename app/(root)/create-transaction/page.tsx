import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import TransactionModalForm from "@/components/modals/TransactionCard";

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <section className="flex flex-col items-center gap-5">
      <h1 className="head-text">CRIAR MOVIMENTAÇÃO FINANCEIRA</h1>
      <TransactionModalForm />
      <h2 className="pt-12">Histórico</h2>
    </section>
  );
}

export default Page;
