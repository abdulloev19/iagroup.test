export const Projects = {
  data() {
    return {
      projects: [
        {nameProject: "Project 1", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 2", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 3", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 4", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 5", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 6", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 7", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 8", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 9", title:  `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 10", title: `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 11", title: `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
        {nameProject: "Project 12", title: `Title project Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt distinctio optio excepturi rem earum dolorum dolor, commodi incidunt itaque impedit assumenda officia laboriosam dignissimos amet fugit quaerat natus accusamus harum? Nisi, nostrum amet! Consequuntur assumenda quidem quisquam. Doloribus necessitatibus, corporis placeat consequuntur, hic quos, quaerat officiis nulla quo delectus voluptas.`,backImage: ""},
      ]
    }
  },

  methods: {
    scrolling(){
        alert("end")
    }
  },
  template: `
  <div class="projects"  @scroll="scrolling" id="iagroup">
  <div class="container">
    <div class="projects_content">
    <h1>All Projects</h1>
    <div class="projects_all">
      <div class="project_item" v-for="item in projects">
        <h1>{{item.nameProject}}</h1>
        <p> {{item.title}} </p>
      </div>
    </div>
    </div>
  </div>
</div>

  `

};
