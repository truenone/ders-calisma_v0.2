'use client'
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useForm, SubmitHandler } from "react-hook-form"
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai"

type Inputs = {
    username: string
    password: string
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

    }


    return (
        <div className="flex flex-row items-center justify-center h-full w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center md:w-1/2 w-full h-full">
                <h3 className="font-bold text-2xl">Giriş Ekranı</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <Button>
                            <AiFillGoogleCircle /> Google
                        </Button>
                        <Button>
                            <AiFillGithub /> Github
                        </Button>
                    </div>

                </div>
                {/* register your input into the hook by invoking the "register" function */}
                <Input label='Kullanıcı Adı' {...register("username", { required: true })} />
                {errors.username && <span className="text-red-500 text-xs">Kullanıcı adı Gerekli</span>}

                <Input type="password" label='Şifre'{...register("password", { required: true })} />
                {errors.password && <span className="text-red-500 text-xs">Şifre gerekli</span>}

                <div className="flex flex-row object-right w-full justify-end">
                    <Button type="submit" className="">Giriş Yap</Button>
                </div>

            </form>

        </div>
    )
}