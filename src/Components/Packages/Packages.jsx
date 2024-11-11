import React from "react"

export default function Packages() {
  return (
    <>
      {/*<!-- Component: Elevated accordion --> */}
      <section className="w-full divide-y divide-slate-200 rounded bg-white shadow-md shadow-slate-200">
        <details className="group p-4" open>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
          Colombo City Tour  
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac13 desc-ac13"
            >
              <title id="title-ac13">Open icon</title>
              <desc id="desc-ac13">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
          Travel through yourself in the hustle and bustle of the heart of Sri Lanka’s capital: Colombo! Experience the sights, sounds, and smells of this vibrant city together with your private host. The very best must-sees, hidden gems, and local snacks await! So, learning more than possible alone. See the Red Mosque, markets, and more and stop to try popular foods such as cassava chips and 'achcharu' (pickle) to gain a true perspective on local life and cuisine that most visitors never get
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I know what is new?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac14 desc-ac14"
            >
              <title id="title-ac14">Open icon</title>
              <desc id="desc-ac14">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            You will always get notified about new components through our
            discord and other social accounts. You can also see the newest
            components on the main component page as well as the websites side
            navigation with a "new" badge next to their name.
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I know what is updated?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac15 desc-ac15"
            >
              <title id="title-ac15">Open icon</title>
              <desc id="desc-ac15">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            All updated components will be accompanied by an "updated" badge.
            YOu will be able to see that on our main components page as well as
            our side navigation.
          </p>
        </details>
        <details className="group p-4">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How will I know about any major releases or news?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac16 desc-ac16"
            >
              <title id="title-ac16">Open icon</title>
              <desc id="desc-ac16">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            You will get notified by us about any major news or releases through
            our newsletter and our social accounts.
          </p>
        </details>
      </section>
      {/*<!-- End Elevated accordion --> */}
    </>
  )
}