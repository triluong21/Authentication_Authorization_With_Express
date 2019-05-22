node ('docker') {
    checkout scm
    stage('echo') {
        echo 'start'
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
