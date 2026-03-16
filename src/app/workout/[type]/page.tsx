"use client"
import React from 'react'
import './workoutPage.css'

const page = ({ params }: { params: { type: string } }) => {
    const [workout, setWorkout] = React.useState<any>(null)

    const getworkout = async () => {
        // Just mock data for now based on the original component
        let data: any = {
            type: params.type || 'Workout',
            imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
            durationInMin: 30,
            exercises: [
                {
                    exercise: 'Flat Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Building your chest starts here.'
                },
                {
                    exercise: 'Incline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Target your upper chest for a fuller, bolder look. Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                {
                    exercise: 'Decline Bench Press',
                    videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif',
                    sets: 3,
                    reps: 10,
                    rest: 60,
                    description: 'Develop the lower chest muscles effectively. Lorem ipsum dolor sit amet consectetur adipisicing.'

                },
                {
                    exercise: 'Machine Fly',
                    videoUrl: 'https://gymvisual.com/img/p/2/1/4/2/9/21429.gif',
                    sets: 3,
                    reps: 12,
                    rest: 45,
                    description: 'Isolate the chest perfectly using the machine fly for maximum hypertrophy and blood flow.'
                }
            ]
        }

        setWorkout(data)
    }

    React.useEffect(() => {
        getworkout()
    }, [])

    return (
        <div className='workout'>
            <h1 className='mainhead1'> {workout?.type} Day</h1>
            <div className='workout__exercises'>
                {
                    workout?.exercises.map((item: any, index: number)=>{
                        return (
                            <div key={index} className={
                                index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'
                            }>
                                <h3>{index + 1}</h3>
                                <div className='workout__exercise__image'>
                                    <img src={item.videoUrl} alt={item.exercise} />
                                </div>
                                <div className='workout__exercise__content'>
                                    <h2>{item.exercise}</h2>
                                    <span>{item.sets} sets X {item.reps} reps</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page