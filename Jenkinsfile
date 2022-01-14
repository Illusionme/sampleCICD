pipeline {
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
