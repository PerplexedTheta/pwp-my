package Qgoda::TT2::Plugin::gravatar_url;

use strict;

use base qw(Template::Plugin::Filter);

use Qgoda '0.9.7';
use Qgoda::Config;
use Qgoda::Util qw(trim html_escape tt2_args_merge);

use Digest::SHA qw(sha256);

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

    my $size = $local_conf->{size} || 200;

    return 'https://gravatar.com/avatar/' . unpack("H*", sha256($text)) . '?s=' . $size;
;
}

1;

=head1  NAME

Qgoda::TT2::Plugin::gravatar_url - gravatar_url functionality for Qgoda

=head1 DESCRIPTION

See L<https://github.com/PerplexedTheta/pwp-my>!
