node ('docker') {
  def gitVars
  try {
    nodeHelper()
    stage('Checkout') {
      gitVars = checkout scm
    }
    stage('YInstall') {
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
