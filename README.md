# OPC PowerApps

PowerApps solution for tracking complaints pertaining to the [privacy laws](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
git clone https://github.com/opc-cpvp/OPC.PowerApps.git
```

### Prerequisites

- Microsoft .NET 4.7+
- PowerShell v3+

### Xrm Definitely Typed

To start generating TypeScript type definitions for webresources through the **get_XrmDefinitlyTypes.ps1** script you will need to reinstall the nuget packages using this following command in the Package Manager Console:

```
Update-Package -reinstall -project XrmDefinitelyTyped
```

### Installing

After compiling and packaging the solution, you can simply import it into your Dynamics / PowerApps environment.

## Built With

* [Microsoft Power Apps](https://powerapps.microsoft.com/en-us/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/opc-cpvp/OPC.PowerApps/tags). 

## Authors

* **OPC-CPVP** - *Initial work* - [OPC-CPVP](https://github.com/opc-cpvp)

See also the list of [contributors](https://github.com/opc-cpvp/OPC.PowerApps.DataMigration/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
