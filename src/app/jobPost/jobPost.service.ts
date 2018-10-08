import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*type JobPost = {
    title: string,
    jobID: string,
    description: string
};*/

@Injectable()

export class JobPostService {
    uri: string;
    userID: number;
    //posts: JobPost[] = [];
    constructor(private http: HttpClient) {
        this.uri = 'http://localhost:4210';
        this.userID = 1;
    };

    getJobs() {
        return this.http.get(`${this.uri}/job-posts`);
    }
    saveJob({ jobID }) {
        return this.http.post(`${this.uri}/saved-jobs`, { userID: this.userID, jobID });
    };
    postNewJob({ title, description, jobID }) {
        return this.http.post(`${this.uri}/job-posts`, { title, description, jobID });
    };
    deletePost({ jobID }) {
        return this.http.delete(`${this.uri}/job-posts/${jobID}`);
    };
}