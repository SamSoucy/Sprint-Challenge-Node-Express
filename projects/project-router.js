const express = require("express");

const Projects = require("../data/helpers/projectModel")

const router = express.Router();



router.get('/', async (req, res) => {
    try {
      const projects = await Projects.get(req.query);
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'The projects information could not be retrieved.',
      });
    }
});
router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getById(req.params.id);

    if (project.length !== 0) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "The post with the specified ID does not exist."  });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The project information could not be retrieved.",
    });
  }
});



module.exports = router;