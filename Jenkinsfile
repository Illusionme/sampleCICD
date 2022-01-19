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
                withCredentials([string(credentialsId: '31e1fc26-256c-447b-af94-c23c51efa2af', variable: 'Secret')]) {
                    dependencyTrackPublisher artifact: 'bom.xml', projectName: 'sampleCICD', projectVersion: 'my-version', synchronous: true, dependencyTrackApiKey: '{AQAAABAAAAAQOiqqN3VwdhaFgkGq07Z3aAV6N0ZkNK5OIJYiVJCNp5Q=}'
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
