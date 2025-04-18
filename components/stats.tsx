interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: "50+", label: "Happy clients" },
  { value: "75", label: "Projects completed" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "75", label: "Positive Reviews" },
]

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center justify-center rounded-lg bg-card p-8 text-center">
          <div className="text-4xl font-bold text-primary">{stat.value}</div>
          <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
