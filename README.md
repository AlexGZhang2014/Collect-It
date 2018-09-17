# Collect-It

## Installation

1. Fork this repository
2. Clone your fork of this repository (git clone...)
3. Switch into the "collect-it" directory (cd collect-it)
4. Run "bundle install" to install all gems and necessary dependencies
5. Run "rake db:migrate" - if you have a seed.rb file, also run "rake db:seed"
6. Switch into the "client" folder (cd client)
7. Run "npm install" to install React and all other necessary dependencies
8. Switch back to the root directory (cd ..)
9. Run "rake start" to boot up both servers
10. Enjoy the app!

## Usage

Collect-It is a fully-functional app that incorporates a Rails API backend and a React/Redux frontend. Users can perform all standard CRUD actions for every model. Users can create posts and comment on them, as well as edit them and delete them. Users can also create collections and add items to those collections, as well as leave reviews with ratings on collections. Users can also edit collections, items, and reviews. This app makes use of styling from Material-UI, the same framework that is used by Google.

Coming soon: This app will eventually be deployed to a Heroku server.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/AlexGZhang2014/Collect-It. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Collect-It project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/'AlexGZhang2014'/Collect-It/blob/master/CODE_OF_CONDUCT.md).
