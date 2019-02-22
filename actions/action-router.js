const express = require("express");

const Actions = require("../data/helpers/actionModel")

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const actions = await Actions.get();
      res.status(200).json(actions);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'The actions information could not be retrieved.',
      });
    }
});

router.get('/:id', async (req, res) => {
    try {
      const action = await Actions.get(req.params.id);
  
      if (action.length !== 0) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "The action with the specified ID does not exist."  });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "The action information could not be retrieved.",
      });
    }
  });

module.exports = router;