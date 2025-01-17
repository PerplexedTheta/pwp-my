requires 'AnyEvent', '0';
requires 'AnyEvent::Filesys::Notify', '1.23';
requires 'AnyEvent::Handle', '0';
requires 'AnyEvent::Loop', '0';
requires 'Archive::Extract', '0';
requires 'Cpanel::JSON::XS', '0';
requires 'Cwd', '0';
requires 'Data::Dumper', '0';
requires 'Data::Walk', '2.00';
requires 'Date::Parse', '0';
requires 'Digest::SHA';
requires 'Encode', '2.12';
requires 'Exporter', '0';
requires 'ExtUtils::MakeMaker', '7.1101';
requires 'File::Basename', '0';
requires 'File::Copy', '0';
requires 'File::Copy::Recursive', '0';
requires 'File::Find', '0';
requires 'File::Globstar', '0';
requires 'File::Globstar::ListMatch', '0';
requires 'File::HomeDir', '0';
requires 'File::Path', '0';
requires 'File::Spec', '0';
requires 'File::Temp', '0';
requires 'Filter::Util::Call', '0';
requires 'Getopt::Long', '2.36';
requires 'Git', '0';
requires 'HTML::Parser', '0';
requires 'HTML::TreeBuilder', '0';
requires 'IO::File', '0';
requires 'IO::Handle', '0';
requires 'IO::Interactive', '0';
requires 'IPC::Open3', '0';
requires 'IPC::Signal', '0';
requires 'Inline', '0';
requires 'JSON', '2.0';
requires 'JSON::PP', '0';
requires 'JavaScript::Duktape::XS', '<= 0.000074';
requires 'LWP::UserAgent', '0';
requires 'List::Util', '1.45';
requires 'Locale::Messages', '0';
requires 'Locale::TextDomain', '1.30';
requires 'Locale::Util', '0';
requires 'Locale::XGettext', '0.7';
requires 'Locale::gettext_dumb', '0';
requires 'MIME::Base64', '0';
requires 'POSIX', '0';
requires 'Pod::Perldoc', '0';
requires 'Scalar::Util', '0';
requires 'Storable', '0';
requires 'Symbol', '0';
requires 'Template', '0';
requires 'Template::Constants', '0';
requires 'Template::Plugin', '0';
requires 'Template::Plugin::Filter', '0';
requires 'Template::Plugin::Gettext', '0.7';
requires 'Template::Provider', '0';
requires 'Template::Stash', '0';
requires 'Term::ANSIColor', '0';
requires 'Text::Markdown', '0';
requires 'Text::Markdown::Hoedown', '0';
requires 'Text::Unidecode', '0';
requires 'Time::HiRes', '0';
requires 'URI', '0';
requires 'URI::Escape', '0';
requires 'URI::file', '0';
requires 'URI::git', '0.02';
requires 'YAML', '0';
requires 'YAML::XS', '0.67';
requires 'base', '0';
requires 'boolean', '0';
requires 'common::sense', '0';
requires 'constant', '0';
requires 'integer', '0';
requires 'overload', '0';
requires 'perl', '5.018';
requires 'strict', '0';
requires 'vars', '0';
requires 'warnings', '0';

if ($^O eq 'linux') {
    warn 'Installing Linux-specific dependencies';
    requires 'Linux::Inotify2';
} elsif ($^O eq 'darwin') {
    warn 'Installing Mac-specific dependencies';
    requires 'Mac::FSEvents';
} elsif ($^O =~ /bsd/) {
    warn 'Installing BSD-specific dependencies';
    requires 'IO::KQueue';
}
