package Qgoda::TT2::Plugin::relative_url;

use strict;

use base qw(Template::Plugin::Filter);

use Qgoda '0.9.7';
use Qgoda::Config;
use Qgoda::Util qw(trim html_escape tt2_args_merge);

sub new {
    my ($class, $ctx, @args) = @_;

    my $conf = {};
    if (@args && ref $args[-1] && 'HASH' eq ref $args[-1]) {
        $conf = pop @args;
    }
    my $self = $class->SUPER::new($ctx);

    $self->{__args} = \@args;
    $self->{__conf} = $conf;
    $self->{__config} = Qgoda::Config->new;

    return $self;
}

sub init {
    my ($self) = @_;

    $self->{_DYNAMIC} = 1;

    return $self;
}

sub filter {
    my ($self, $text, $local_args, $local_conf) = @_;

    $text = trim $text;
    my $baseurl = $self->{__config}->{url} || '/';
    $baseurl .= '/' if substr $baseurl, -1 != '/';

    $text = '' if $text eq '/';

    return $baseurl . $text;
}

1;

=head1  NAME

Qgoda::TT2::Plugin::relative_url - relative_url functionality for Qgoda

=head1 DESCRIPTION

See L<https://github.com/PerplexedTheta/pwp-my>!
