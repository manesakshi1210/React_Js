

export default function Cards() {
  return (
    <div className="cards-container">
      
      <h4 className="title text-center text-3xl">Cards</h4>

      <div className="flex justify-center items-center gap-6 flex-wrap ">

        <div className="card  ">
          <h2 className="bg-red-50 h-50 w-50">Card 1</h2>
          <p>This is a simple card description.</p>
        </div>

        <div className="card">
          <h2>Card 2</h2>
          <p>This is a simple card description.</p>
        </div>

        <div className="card">
          <h2>Card 3</h2>
          <p>This is a simple card description.</p>
        </div>

      </div>
    </div>
  );
}