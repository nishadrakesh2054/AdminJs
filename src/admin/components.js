import { ComponentLoader } from "adminjs";

const componentLoader = new ComponentLoader();

const Components = {
    BrandLogo: componentLoader.add("BrandLogo", "@adminjs/upload")

};

export { componentLoader, Components };
