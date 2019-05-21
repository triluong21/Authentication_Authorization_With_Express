node ('docker') {
  def gitVars
  try {
    stage('Checkout') {
      gitVars = checkout scm
    }
    stage('Install') {
      sh 'yarn install'
    }
  } catch (e) {
    throw e
  }
}