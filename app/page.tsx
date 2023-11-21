import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen text-white flex items-center p-24 flex-col bg-zinc-900">
      <div className='flex items-center justify-center flex-row w-full '>
        <Image 
          src={'/pfp.jpg'} 
          alt='Profile Picture' 
          width={1920} 
          height={1080} 
          className='w-32 rounded-lg m-7 shadow-sm  shadow-white '
          >
 
        </Image>
        <div className='flex-col'>
          <p className="text-3xl font-semibold pb-2">Olá, me chamo Matheus Henrique </p>
          <p className=' text-zinc-400'>sou um desenvolvedor fullstack :)</p>
        </div>
      </div>
      <div className='mt-[100px] max-w-[1/2] justify-center'>
        <p className='text-justify max-w-xl text-zinc-200'>Sou um estudante cursando Ciências da Computação pela UFG, gosto de desenvolvimento web e número hexadecimais, programo quando não estou ouvindo música,  .</p>
      </div>
        <div className='flex-col mt-[300px] justify-end'>
          <p className='flex text-2xl'> Projetos</p>
        </div>
    </main>
  );
}
