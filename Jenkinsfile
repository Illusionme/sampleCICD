pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('dependencyTrackPublisher') {
            steps {
                withCredentials([string(credentialsId: 'secret', variable: 'secret')]) {
                    dependencyTrackPublisher artifact: 'bom.xml', projectName: 'sampleCICD', projectVersion: 'my-version', synchronous: true, dependencyTrackApiKey: secret
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
