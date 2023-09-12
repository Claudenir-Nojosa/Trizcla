import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10">
      <h1 className="head-text text-heading2-bold">FINALIZAR CADASTRO</h1>
      <p className="mt-3 text-base-regular head-text">
        Complete o seu perfil agora para utilizar o Trizcla
      </p>
      <section className="mt-9 bg-gray-100 dark:bg-slate-950 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
