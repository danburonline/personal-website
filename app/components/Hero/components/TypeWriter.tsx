import TypeWriterEffect from "react-typewriter-effect"

export default function TypeWriter() {
  return (
    <span className="block text-primary xl:inline">
      <TypeWriterEffect
        textStyle={{ textAlign: "center" }}
        startDelay={100}
        cursorColor="#FFE000"
        multiText={["Software Engineer", "Web Developer", "Interaction Designer", "Neuroscientist"]}
        typeSpeed={100}
        multiTextLoop={true}
      />
    </span>
  )
}
