function Card({title, subtitle}) {
  return (

    <div>
    <div className=" text-center flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
       
    </div>
    <h3 className="mb-2 text-xl font-bold dark:text-white text-center">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-center">{subtitle}</p>
</div>

  )
}

export default Card