"use client";
import Counter from "@/components/Counter";
import PersonCom from "@/components/PersonCom";
import ReduxQueryCom from "@/components/ReduxQueryCom";
import { login, setIsLoading, signup } from "@/store/features/auth/auth-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function Home() {
  const { authenticated, token, isLoading } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  else
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-slate-400 flex flex-col h-96 justify-center items-center">
          <h1 className="text-2xl">{authenticated ? "yes" : "no"}</h1>
          <h1 className="text-2xl">{token}</h1>
          <button
            onClick={async () =>
              dispatch(
                login({
                  email: "kasandra.petra@example.com",
                  password: "123456789",
                })
              )
            }
            className="bg-red-600 p-4"
          >
            Test auth
          </button>

          <button
            onClick={async () => dispatch(setIsLoading(true))}
            className="bg-red-600 p-4"
          >
            Make it Loading
          </button>
          <button
            onClick={async () =>
              dispatch(
                signup({
                  email: "dummymail@gmail.com",
                  name: "Mohamed Dummy",
                  password: "123456789",
                  confirmPassword: "123456789",
                  phone: "+201069600541",
                })
              )
            }
          >
            Test register
          </button>
        </div>
        <Counter />
        <PersonCom />
        <ReduxQueryCom />
      </div>
    );
}
