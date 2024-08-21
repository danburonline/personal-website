import TypeWriterEffect from "react-typewriter-effect"

export default function TypeWriter() {
  return (
    <span className="block text-primary xl:inline">
      <TypeWriterEffect
        textStyle={{ textAlign: "center" }}
        startDelay={100}
        cursorColor="#FFE000"
        multiText={["Neurotechnologist", "Neuroscientist", "AI Researcher", "Software Engineer"]}
        typeSpeed={100}
        multiTextLoop={true}
      />
    </span>
  )
}
