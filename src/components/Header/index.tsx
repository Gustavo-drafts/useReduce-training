
export function Header() {
  return (
    <>
      <div className="p-2 bg-gray400 flex container-xl h-20 justify-between items-center">
        <div className='flex-none w-28 h-7'>
          <strong className="text-2xl">Logo</strong>
        </div>
        <div className="flex gap-10 text-gray700 font-semibold font-sans text-lg justify-between">
          <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:hover:bg-violet100 duration-700 w-36 h-10">Cadastrar</button>
          <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:bg-violet100 hover:duration-700 w-36 h-10">Editar</button>
          <button className="shadow-md shadow-black-500/50 flex-1 rounded hover:text-white hover:bg-violet100 hover:duration-700 w-36 h-10">Deletar</button>
        </div>
      </div>
    </>
  )
}