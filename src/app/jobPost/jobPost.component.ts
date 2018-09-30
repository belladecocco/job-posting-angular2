/*need to import component decorator*/
import { Component } from '@angular/core';
import { JobPostService } from './jobPost.service';

type JobPost = {
    title: string,
    jobID: string,
    description: string
};

@Component({
    selector: 'job-post', /*indicates an html tag*/
    templateUrl: './jobPost.html',
    providers: [JobPostService]
})
export class JobPostComponent {

    posts: JobPost[] = [];
    newJob: JobPost = {
        title: '',
        description: '',
        jobID: ''
    };
    constructor(private jobPostService: JobPostService) {
        this.jobPostService.getJobs().subscribe((jobData: JobPost[]) => {
            console.log('Getting jobs');
            console.log(jobData);
            this.posts = jobData;
        });
     };

    saveJob(post: JobPost) {
        this.jobPostService.saveJob({jobID: post.jobID}).subscribe(jobData => {
            console.log('Saving job');
            console.log(jobData);
        });
    }; 
    postNewJob() {
        this.jobPostService.postNewJob(this.newJob).subscribe(jobData => {
            console.log('Posting job');
            console.log(jobData);
            //const newPost = {description: this.newJob.description, jobID: this.newJob.jobID, title: this.newJob.title}
            const newPost = Object.assign({}, this.newJob);
            this.posts.push(newPost);
        });
    };
}