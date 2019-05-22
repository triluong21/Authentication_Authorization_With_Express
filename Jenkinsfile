node ('docker') {
    checkout scm
    stage('echo') {
        echo 'start'
    }    
    stage('XInstall') {
        sh 'yarn install'
    }
  } catch (e) {
    throw e
  } finally {
    stage('Notify') {
      sh 'yarn install'
    }
  }
