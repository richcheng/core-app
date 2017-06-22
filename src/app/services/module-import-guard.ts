// implemented according to https://angular.io/styleguide#!#04-12 : Prevent re-import of the core module

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string){
    if(parentModule){
        throw new Error(`${moduleName} has already been loaded. Import this module in the AppModule only.`);
    }
}