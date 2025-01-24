import TypeWriterEffect from "react-typewriter-effect"

export default function TypeWriter() {
  return (
    <span className="block text-primary xl:inline">
      <TypeWriterEffect
        textStyle={{ textAlign: "center" }}
        startDelay={100}
        cursorColor="#FF40FF"
        multiText={["Neuroengineer", "Startup Founder", "Neuroscientist"]}
        typeSpeed={100}
        multiTextLoop={true}
      />
    </span>
  )
}
