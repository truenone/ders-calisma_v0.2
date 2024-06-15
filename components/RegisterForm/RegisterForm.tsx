'use client'
import { Button, ButtonGroup } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { useForm, SubmitHandler } from "react-hook-form"
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai"

type Inputs = {
    email: string
    name: string
    surname: string
    username: string
    password: string
    exampleRequired: string
}

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

    }

    console.log(watch("email")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="flex flex-row items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center md:w-1/2 w-full">
                <h3 className="font-bold text-2xl">Kayıt Ekranı</h3>
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
                <Input label='E-Mail' {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500 text-xs">E-Mail Gerekli</span>}

                <Input label='İsim' {...register("name", { required: true })} />
                {errors.name && <span className="text-red-500 text-xs">İsim gerekli</span>}

                <Input label='Soyisim' {...register("surname", { required: true })} />
                {errors.surname && <span className="text-red-500 text-xs">Soy isim gerekli</span>}

                <Input label='Kullanıcı adı' {...register("username", { required: true })} />
                {errors.username && <span className="text-red-500 text-xs">Kullanıcı adı gerekli</span>}

                <Input type="password" label='Şifre'{...register("password", { required: true })} />
                {errors.password && <span className="text-red-500 text-xs">Şifre gerekli</span>}



                <div className="flex flex-row object-right w-full justify-end">
                    <Button type="submit" className="">Kayıt Ol</Button>
                </div>
            </form>
        </div>

    )
}