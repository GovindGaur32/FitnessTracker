"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './WorkoutSlider.css'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const WorkoutSlider = () => {
  const [workouts, setWorkouts] = React.useState<any[] | null>(null)
  const [isLoggedin, setIsLoggedin] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const checklogin = async () => {
        setIsLoading(true)
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/checklogin', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => res.json())   
            .then(data => {
                if (data.ok) {
                    setIsLoggedin(true)
                }
                else{
                     setIsLoggedin(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

  const getworkouts = async () => {
    let data: any = [
      {
        type: 'Chest',
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 30
      },
      {
        type: 'Abs',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 90
      },
      {
        type: 'Shoulder',
        imageUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 40
      },
      {
        type: 'Back',
        imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 70
      },
      {
        type: 'Biceps',
        imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        durationInMin: 50
      },
      {
        type: 'Triceps',
        imageUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 60
      },
      {
        type: 'Legs',
        imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 80
      },
      {
        type: 'Cardio',
        imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 100
      },
      {
        type: 'Forearms',
        imageUrl: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        durationInMin: 110
      }
    ]
    setWorkouts(data)
  }

  React.useEffect(() => {
    checklogin()
    getworkouts()
  }, [])

  if (isLoading) return null;
  if (!isLoggedin) return null;

  return (
    <div className="workout-slider-section">
      <div className="workout-header">
        <h2 className="workout-animated-heading">Workouts</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          workouts && workouts.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <div className='workout-card'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                  onClick={() => {
                    window.location.href = `/workout/${item.type}`
                  }}
                >
                  <div className='workout-card-content'>
                    <h2>{item.type}</h2>
                    <p>{item.durationInMin} min</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default WorkoutSlider;
