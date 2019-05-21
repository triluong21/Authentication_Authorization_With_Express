pipeline {
  agent any
  def gitVars
  boolean jobSuccess = true
  try {
    stages {
      stage('Install') {
        sh 'yarn install'
      }
    }
  } catch (e) {
    jobSuccess = false
    throw e
  } finally {
    stage('Notify') {
      slackHelper(jobSuccess, gitVars, '@tluong')
    }
  }
}