plugins {
  id("com.github.node-gradle.node") version "7.1.0"
}

node {
  download.set(true)
  version.set("22.21.1")
  nodeProjectDir.set(file(projectDir))
}

// This allows you to run 'npm start' via Gradle
val npmStart = tasks.register<com.github.gradle.node.npm.task.NpmTask>("npmStart") {
  args.set(listOf("run", "start"))
}
