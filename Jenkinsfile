node ('docker') {
  def gitVars
  try {
    nodeHelper()
    stage('Checkout') {
      gitVars = checkout scm
    }
    stage('Install') {
      sh 'yarn install'
    }
  } catch (e) {
    throw e
  } finally {
    stage('Notify') {
      sh 'yarn install'
    }
  }
}