import { Container } from "inversify";
import {ComplaintService } from "./services/ComplaintService";
import Interfaces = require("./interfaces");
import IComplaintService = Interfaces.IComplaintService;
import getDecorators from "inversify-inject-decorators";

const myContainer = new Container();
myContainer.bind<IComplaintService>(nameof<IComplaintService>()).to(ComplaintService);
const { lazyInject } = getDecorators(myContainer);

export { lazyInject };
export { myContainer }; 