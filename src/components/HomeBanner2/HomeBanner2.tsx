import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeBanner2.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const HomeBanner2 = () => {
  const [blogs, setBlogs] = React.useState<any[] | null>(null)

  const getBlogs = async () => {
    let data: any = [
      {
        title: 'Mastering the Bench Press',
        category: 'Muscle Building',
        description: 'Discover the most effective techniques to build a broader, stronger chest and improve your overall push strength.',
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Oct 12, 2026',
        author: 'John Doe'
      },
      {
        title: 'Core Crushing Abs Routine',
        category: 'Fat Loss',
        description: 'Sculpt your midsection with this high-intensity ab routine designed to burn fat and reveal those six-pack muscles.',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Oct 15, 2026',
        author: 'Jane Smith'
      },
      {
        title: 'Build Boulder Shoulders',
        category: 'Strength Training',
        description: 'Take your overhead press to the next level and build impressive shoulder width with these targeted isolation movements.',
        imageUrl: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Oct 20, 2026',
        author: 'Mike Johnson'
      },
      {
        title: 'Back Day Fundamentals',
        category: 'Muscle Building',
        description: 'A strong back is the foundation of a healthy physique. Learn the essential rows and pull-downs for optimal back development.',
        imageUrl: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Oct 25, 2026',
        author: 'Sarah Lee'
      },
      {
        title: 'High-Intensity Cardio',
        category: 'Endurance',
        description: 'Boost your heart rate and burn calories effectively with this guided high-intensity interval training session.',
        imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Nov 02, 2026',
        author: 'Alex Carter'
      },
      {
        title: 'Leg Day Essentials',
        category: 'Strength Training',
        description: 'Never skip leg day! Dive into deep squats, lunges, and deadlifts for a strong, balanced lower body.',
        imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
        date: 'Nov 10, 2026',
        author: 'Chris Evans'
      }
    ]
    setBlogs(data)
  }
  
  React.useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title">Fitness <span>Insights</span></h2>
        <p className="blog-subtitle">Stay updated with our latest training routines, nutrition tips, and fitness news.</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="blogSwiper"
      >
        {
          blogs && blogs.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <div className='blog-card'>
                  <div className="blog-image-wrapper">
                    <img src={item.imageUrl} alt={item.title} className="blog-image" />
                    <div className="blog-category">{item.category}</div>
                  </div>
                  
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">{item.date}</span>
                      <span className="blog-author">{item.author}</span>
                    </div>
                    <h3 className="blog-card-title">{item.title}</h3>
                    <p className="blog-card-desc">{item.description}</p>
                    <a href="#" className="read-more-btn">
                      Read Article 
                      <span className="arrow">→</span>
                    </a>
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

export default HomeBanner2