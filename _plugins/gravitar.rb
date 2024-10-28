require 'digest'

module Jekyll
    module GravitarURL
        def get_gravitar_url(input, size=200)
            "https://gravatar.com/avatar/" + (Digest::SHA256.hexdigest "jahdobble@llownd.net") + "?s=" + size.to_s
        end
    end
end
  
Liquid::Template.register_filter(Jekyll::GravitarURL)
