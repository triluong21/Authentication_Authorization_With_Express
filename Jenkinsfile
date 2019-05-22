node ('docker') {
    checkout scm
    stage('echo') {
        echo 'start'
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
