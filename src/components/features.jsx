import Card from "./card";
function Features(){
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for business teams like yours</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <Card title="Marketing" subtitle= "this is for marketing stuff you can use it for only in markeplace" />
            <Card  title =  "Application" subtitle = "this is for only application  purpose you can't use it for any comps"/>
            <Card title="Design" subtitle = "this is for deign system you can apply all this desin system on the platforms"/>
           
      </div>
  </div>
</section>
        </>
    )
};


export default Features;