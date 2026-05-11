require 'digest'

module Jekyll
    module LibravatarURL
        def get_libravatar_url(input, size=200)
            "https://seccdn.libravatar.org/avatar/" + (Digest::SHA256.hexdigest input) + "?s=" + size.to_s
        end
    end
end

Liquid::Template.register_filter(Jekyll::LibravatarURL)
