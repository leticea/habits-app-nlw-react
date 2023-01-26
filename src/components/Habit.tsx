interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className="">{props.completed}</div>
  )
}