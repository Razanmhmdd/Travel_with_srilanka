import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import img1 from "../../assets/img/logo/logo1.png"
import img2 from "../../assets/img/logo/logo2.png"
import img3 from "../../assets/img/logo/logo3.png"
import img4 from "../../assets/img/logo/logo4.png"
import img5 from "../../assets/img/logo/logo5.png"
import img6 from "../../assets/img/logo/logo6.png"

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 overflow-hidden relative w-full px-4 sm:px-8 lg:px-12 py-6">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 gap-4 md:gap-6 lg:gap-8">
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img1}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img2}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img3}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img4}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img5}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img6}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}
