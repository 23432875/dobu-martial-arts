export default function Membership() {
    return (
        <> <div className="bg-neutral-900 "> 
        </div>

        <div className="min-h-screen bg-black p-4">
        <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-purple-900 underline">
          Memberships
        </h1>
        <ul className="mx-auto max-w-xl p-4">
          <li className="mb-4 rounded-lg bg-gray-400 p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-purple-200">
            <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-purple-900">
              Basic
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-900">
                Karate - 2 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-purple-800">
                £25.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-gray-400 p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-purple-200">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-purple-900">
              Intermediate
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600">
                 - 3 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-purple-800">
                £35.00
              </dd>
            </dl>
          </li>
          <li className="mb-4 rounded-lg bg-gray-400 p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer hover:bg-purple-200">
            <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-purple-600">
              Advanced
            </h2>
            <dl>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Description
              </dt>
              <dd className="mb-3 text-neutral-600 hover:bg-purple-200">
                Karate - 5 sessions per week. Monthly fee.
              </dd>
              <dt className="bold mb-1 text-xs uppercase text-purple-900">
                Price
              </dt>
              <dd className="mb-3 font-serif text-xl font-extrabold text-purple-800">
                £45.00
              </dd>
            </dl>
          </li>
        </ul>
      </div>
        </>
    )
}


