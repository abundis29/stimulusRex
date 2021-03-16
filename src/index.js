
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import StimulusReflex from 'stimulus_reflex'
import './index.css'


const consumer = io(`http://${window.location.host}/`, { transports: ["websocket"] });

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
application.consumer = consumer
StimulusReflex.initialize(application, { consumer })



