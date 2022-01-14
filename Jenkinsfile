pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3001:3001'
        }
    }
    stages {
        stage('dependencyTrackPublisher') {
            steps {
                dependencyTrackPublisher artifact: 'target/bom.xml', projectName: 'sampleCICD'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
